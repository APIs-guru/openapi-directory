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
import { NestedUser } from "./nesteduser";
export var ObjectChangeActionLabelEnum;
(function (ObjectChangeActionLabelEnum) {
    ObjectChangeActionLabelEnum["Created"] = "Created";
    ObjectChangeActionLabelEnum["Updated"] = "Updated";
    ObjectChangeActionLabelEnum["Deleted"] = "Deleted";
})(ObjectChangeActionLabelEnum || (ObjectChangeActionLabelEnum = {}));
export var ObjectChangeActionValueEnum;
(function (ObjectChangeActionValueEnum) {
    ObjectChangeActionValueEnum["Create"] = "create";
    ObjectChangeActionValueEnum["Update"] = "update";
    ObjectChangeActionValueEnum["Delete"] = "delete";
})(ObjectChangeActionValueEnum || (ObjectChangeActionValueEnum = {}));
var ObjectChangeAction = /** @class */ (function (_super) {
    __extends(ObjectChangeAction, _super);
    function ObjectChangeAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ObjectChangeAction.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ObjectChangeAction.prototype, "value", void 0);
    return ObjectChangeAction;
}(SpeakeasyBase));
export { ObjectChangeAction };
var ObjectChange = /** @class */ (function (_super) {
    __extends(ObjectChange, _super);
    function ObjectChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", ObjectChangeAction)
    ], ObjectChange.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_object" }),
        __metadata("design:type", Map)
    ], ObjectChange.prototype, "changedObject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_object_id" }),
        __metadata("design:type", Number)
    ], ObjectChange.prototype, "changedObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=changed_object_type" }),
        __metadata("design:type", String)
    ], ObjectChange.prototype, "changedObjectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ObjectChange.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object_data" }),
        __metadata("design:type", String)
    ], ObjectChange.prototype, "objectData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ObjectChange.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time" }),
        __metadata("design:type", Date)
    ], ObjectChange.prototype, "time", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", NestedUser)
    ], ObjectChange.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_name" }),
        __metadata("design:type", String)
    ], ObjectChange.prototype, "userName", void 0);
    return ObjectChange;
}(SpeakeasyBase));
export { ObjectChange };
