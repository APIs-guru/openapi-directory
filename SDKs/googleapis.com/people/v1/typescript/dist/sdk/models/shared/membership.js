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
import { ContactGroupMembershipInput } from "./contactgroupmembership";
import { DomainMembership } from "./domainmembership";
import { FieldMetadataInput } from "./fieldmetadata";
import { ContactGroupMembership } from "./contactgroupmembership";
import { FieldMetadata } from "./fieldmetadata";
// MembershipInput
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
var MembershipInput = /** @class */ (function (_super) {
    __extends(MembershipInput, _super);
    function MembershipInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactGroupMembership" }),
        __metadata("design:type", ContactGroupMembershipInput)
    ], MembershipInput.prototype, "contactGroupMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainMembership" }),
        __metadata("design:type", DomainMembership)
    ], MembershipInput.prototype, "domainMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadataInput)
    ], MembershipInput.prototype, "metadata", void 0);
    return MembershipInput;
}(SpeakeasyBase));
export { MembershipInput };
// Membership
/**
 * A person's membership in a group. Only contact group memberships can be modified.
**/
var Membership = /** @class */ (function (_super) {
    __extends(Membership, _super);
    function Membership() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contactGroupMembership" }),
        __metadata("design:type", ContactGroupMembership)
    ], Membership.prototype, "contactGroupMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domainMembership" }),
        __metadata("design:type", DomainMembership)
    ], Membership.prototype, "domainMembership", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", FieldMetadata)
    ], Membership.prototype, "metadata", void 0);
    return Membership;
}(SpeakeasyBase));
export { Membership };
