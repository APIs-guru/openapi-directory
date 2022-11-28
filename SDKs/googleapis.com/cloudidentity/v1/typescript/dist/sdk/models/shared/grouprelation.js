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
import { EntityKey } from "./entitykey";
import { TransitiveMembershipRole } from "./transitivemembershiprole";
export var GroupRelationRelationTypeEnum;
(function (GroupRelationRelationTypeEnum) {
    GroupRelationRelationTypeEnum["RelationTypeUnspecified"] = "RELATION_TYPE_UNSPECIFIED";
    GroupRelationRelationTypeEnum["Direct"] = "DIRECT";
    GroupRelationRelationTypeEnum["Indirect"] = "INDIRECT";
    GroupRelationRelationTypeEnum["DirectAndIndirect"] = "DIRECT_AND_INDIRECT";
})(GroupRelationRelationTypeEnum || (GroupRelationRelationTypeEnum = {}));
// GroupRelation
/**
 * Message representing a transitive group of a user or a group.
**/
var GroupRelation = /** @class */ (function (_super) {
    __extends(GroupRelation, _super);
    function GroupRelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GroupRelation.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group" }),
        __metadata("design:type", String)
    ], GroupRelation.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupKey" }),
        __metadata("design:type", EntityKey)
    ], GroupRelation.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GroupRelation.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationType" }),
        __metadata("design:type", String)
    ], GroupRelation.prototype, "relationType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles", elemType: TransitiveMembershipRole }),
        __metadata("design:type", Array)
    ], GroupRelation.prototype, "roles", void 0);
    return GroupRelation;
}(SpeakeasyBase));
export { GroupRelation };
