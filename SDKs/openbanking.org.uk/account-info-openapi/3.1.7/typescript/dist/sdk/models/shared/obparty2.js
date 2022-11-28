var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObAddressTypeCodeEnum } from "./obaddresstypecodeenum";
import { ObExternalPartyType1CodeEnum } from "./obexternalpartytype1codeenum";
import { ObPartyRelationships1 } from "./obpartyrelationships1";
// ObParty2Address
/**
 * Postal address of a party.
**/
var ObParty2Address = /** @class */ (function (_super) {
    __extends(ObParty2Address, _super);
    function ObParty2Address() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressLine" }),
        __metadata("design:type", Array)
    ], ObParty2Address.prototype, "addressLine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AddressType" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "addressType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BuildingNumber" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "buildingNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Country" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CountrySubDivision" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "countrySubDivision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PostCode" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "postCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StreetName" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "streetName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TownName" }),
        __metadata("design:type", String)
    ], ObParty2Address.prototype, "townName", void 0);
    return ObParty2Address;
}(SpeakeasyBase));
export { ObParty2Address };
var ObParty2 = /** @class */ (function (_super) {
    __extends(ObParty2, _super);
    function ObParty2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccountRole" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "accountRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Address", elemType: ObParty2Address }),
        __metadata("design:type", Array)
    ], ObParty2.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BeneficialOwnership" }),
        __metadata("design:type", Boolean)
    ], ObParty2.prototype, "beneficialOwnership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EmailAddress" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "emailAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FullLegalName" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "fullLegalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalStructure" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "legalStructure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Mobile" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "mobile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyId" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "partyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyNumber" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "partyNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PartyType" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "partyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Phone" }),
        __metadata("design:type", String)
    ], ObParty2.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Relationships" }),
        __metadata("design:type", ObPartyRelationships1)
    ], ObParty2.prototype, "relationships", void 0);
    return ObParty2;
}(SpeakeasyBase));
export { ObParty2 };
