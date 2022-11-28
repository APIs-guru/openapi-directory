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
var GetImagesIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdPathParams, _super);
    function GetImagesIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetImagesIdActionsActionIdPathParams;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdPathParams };
// GetImagesIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetImagesIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdActionResponseActionError, _super);
    function GetImagesIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetImagesIdActionsActionIdActionResponseActionError;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdActionResponseActionError };
var GetImagesIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdActionResponseActionResources, _super);
    function GetImagesIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetImagesIdActionsActionIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdActionResponseActionResources };
export var GetImagesIdActionsActionIdActionResponseActionStatusEnum;
(function (GetImagesIdActionsActionIdActionResponseActionStatusEnum) {
    GetImagesIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetImagesIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetImagesIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetImagesIdActionsActionIdActionResponseActionStatusEnum || (GetImagesIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetImagesIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdActionResponseAction, _super);
    function GetImagesIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetImagesIdActionsActionIdActionResponseActionError)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetImagesIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetImagesIdActionsActionIdActionResponseAction;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdActionResponseAction };
var GetImagesIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdActionResponse, _super);
    function GetImagesIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetImagesIdActionsActionIdActionResponseAction)
    ], GetImagesIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetImagesIdActionsActionIdActionResponse;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdActionResponse };
var GetImagesIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdRequest, _super);
    function GetImagesIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdActionsActionIdPathParams)
    ], GetImagesIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetImagesIdActionsActionIdRequest;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdRequest };
var GetImagesIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetImagesIdActionsActionIdResponse, _super);
    function GetImagesIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesIdActionsActionIdActionResponse)
    ], GetImagesIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetImagesIdActionsActionIdResponse;
}(SpeakeasyBase));
export { GetImagesIdActionsActionIdResponse };
