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
var GetVolumesIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdPathParams, _super);
    function GetVolumesIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetVolumesIdActionsActionIdPathParams;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdPathParams };
// GetVolumesIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetVolumesIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdActionResponseActionError, _super);
    function GetVolumesIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetVolumesIdActionsActionIdActionResponseActionError;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdActionResponseActionError };
var GetVolumesIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdActionResponseActionResources, _super);
    function GetVolumesIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetVolumesIdActionsActionIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdActionResponseActionResources };
export var GetVolumesIdActionsActionIdActionResponseActionStatusEnum;
(function (GetVolumesIdActionsActionIdActionResponseActionStatusEnum) {
    GetVolumesIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetVolumesIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetVolumesIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetVolumesIdActionsActionIdActionResponseActionStatusEnum || (GetVolumesIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetVolumesIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdActionResponseAction, _super);
    function GetVolumesIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetVolumesIdActionsActionIdActionResponseActionError)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetVolumesIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetVolumesIdActionsActionIdActionResponseAction;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdActionResponseAction };
var GetVolumesIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdActionResponse, _super);
    function GetVolumesIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetVolumesIdActionsActionIdActionResponseAction)
    ], GetVolumesIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetVolumesIdActionsActionIdActionResponse;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdActionResponse };
var GetVolumesIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdRequest, _super);
    function GetVolumesIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdActionsActionIdPathParams)
    ], GetVolumesIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetVolumesIdActionsActionIdRequest;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdRequest };
var GetVolumesIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetVolumesIdActionsActionIdResponse, _super);
    function GetVolumesIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetVolumesIdActionsActionIdActionResponse)
    ], GetVolumesIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetVolumesIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetVolumesIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetVolumesIdActionsActionIdResponse;
}(SpeakeasyBase));
export { GetVolumesIdActionsActionIdResponse };
