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
import { DynamicGroupMetadata } from "./dynamicgroupmetadata";
import { EntityKey } from "./entitykey";
// Group
/**
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Group.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Group.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Group.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicGroupMetadata" }),
        __metadata("design:type", DynamicGroupMetadata)
    ], Group.prototype, "dynamicGroupMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupKey" }),
        __metadata("design:type", EntityKey)
    ], Group.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], Group.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Group.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], Group.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Group.prototype, "updateTime", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
// GroupInput
/**
 * A group within the Cloud Identity Groups API. A `Group` is a collection of entities, where each entity is either a user, another group, or a service account.
**/
var GroupInput = /** @class */ (function (_super) {
    __extends(GroupInput, _super);
    function GroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GroupInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GroupInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamicGroupMetadata" }),
        __metadata("design:type", DynamicGroupMetadata)
    ], GroupInput.prototype, "dynamicGroupMetadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupKey" }),
        __metadata("design:type", EntityKey)
    ], GroupInput.prototype, "groupKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GroupInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], GroupInput.prototype, "parent", void 0);
    return GroupInput;
}(SpeakeasyBase));
export { GroupInput };
