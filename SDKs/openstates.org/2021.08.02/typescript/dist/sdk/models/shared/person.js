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
import { CurrentRole } from "./currentrole";
import { CompactJurisdiction } from "./compactjurisdiction";
import { Link } from "./link";
import { Office } from "./office";
import { AltIdentifier } from "./altidentifier";
import { AltName } from "./altname";
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=birth_date" }),
        __metadata("design:type", String)
    ], Person.prototype, "birthDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Person.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=current_role" }),
        __metadata("design:type", CurrentRole)
    ], Person.prototype, "currentRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=death_date" }),
        __metadata("design:type", String)
    ], Person.prototype, "deathDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], Person.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extras" }),
        __metadata("design:type", Map)
    ], Person.prototype, "extras", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=family_name" }),
        __metadata("design:type", String)
    ], Person.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gender" }),
        __metadata("design:type", String)
    ], Person.prototype, "gender", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=given_name" }),
        __metadata("design:type", String)
    ], Person.prototype, "givenName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Person.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", String)
    ], Person.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=jurisdiction" }),
        __metadata("design:type", CompactJurisdiction)
    ], Person.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links", elemType: Link }),
        __metadata("design:type", Array)
    ], Person.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Person.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offices", elemType: Office }),
        __metadata("design:type", Array)
    ], Person.prototype, "offices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=openstates_url" }),
        __metadata("design:type", String)
    ], Person.prototype, "openstatesUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_identifiers", elemType: AltIdentifier }),
        __metadata("design:type", Array)
    ], Person.prototype, "otherIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=other_names", elemType: AltName }),
        __metadata("design:type", Array)
    ], Person.prototype, "otherNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=party" }),
        __metadata("design:type", String)
    ], Person.prototype, "party", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sources", elemType: Link }),
        __metadata("design:type", Array)
    ], Person.prototype, "sources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Person.prototype, "updatedAt", void 0);
    return Person;
}(SpeakeasyBase));
export { Person };
