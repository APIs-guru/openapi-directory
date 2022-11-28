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
import { Client } from "./client";
import { Folder } from "./folder";
import { Tag } from "./tag";
import { Trigger } from "./trigger";
import { Variable } from "./variable";
export var EntityChangeStatusEnum;
(function (EntityChangeStatusEnum) {
    EntityChangeStatusEnum["ChangeStatusUnspecified"] = "changeStatusUnspecified";
    EntityChangeStatusEnum["None"] = "none";
    EntityChangeStatusEnum["Added"] = "added";
    EntityChangeStatusEnum["Deleted"] = "deleted";
    EntityChangeStatusEnum["Updated"] = "updated";
})(EntityChangeStatusEnum || (EntityChangeStatusEnum = {}));
// Entity
/**
 * A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace.
**/
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changeStatus" }),
        __metadata("design:type", String)
    ], Entity.prototype, "changeStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=client" }),
        __metadata("design:type", Client)
    ], Entity.prototype, "client", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder" }),
        __metadata("design:type", Folder)
    ], Entity.prototype, "folder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tag" }),
        __metadata("design:type", Tag)
    ], Entity.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", Trigger)
    ], Entity.prototype, "trigger", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variable" }),
        __metadata("design:type", Variable)
    ], Entity.prototype, "variable", void 0);
    return Entity;
}(SpeakeasyBase));
export { Entity };
