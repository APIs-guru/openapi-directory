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
var GetServersIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdPathParams, _super);
    function GetServersIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetServersIdActionsActionIdPathParams;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdPathParams };
// GetServersIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetServersIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdActionResponseActionError, _super);
    function GetServersIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetServersIdActionsActionIdActionResponseActionError;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdActionResponseActionError };
var GetServersIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdActionResponseActionResources, _super);
    function GetServersIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetServersIdActionsActionIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdActionResponseActionResources };
export var GetServersIdActionsActionIdActionResponseActionStatusEnum;
(function (GetServersIdActionsActionIdActionResponseActionStatusEnum) {
    GetServersIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetServersIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetServersIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetServersIdActionsActionIdActionResponseActionStatusEnum || (GetServersIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetServersIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdActionResponseAction, _super);
    function GetServersIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetServersIdActionsActionIdActionResponseActionError)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetServersIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetServersIdActionsActionIdActionResponseAction;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdActionResponseAction };
var GetServersIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdActionResponse, _super);
    function GetServersIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetServersIdActionsActionIdActionResponseAction)
    ], GetServersIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetServersIdActionsActionIdActionResponse;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdActionResponse };
var GetServersIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdRequest, _super);
    function GetServersIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdActionsActionIdPathParams)
    ], GetServersIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetServersIdActionsActionIdRequest;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdRequest };
var GetServersIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetServersIdActionsActionIdResponse, _super);
    function GetServersIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetServersIdActionsActionIdActionResponse)
    ], GetServersIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetServersIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetServersIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetServersIdActionsActionIdResponse;
}(SpeakeasyBase));
export { GetServersIdActionsActionIdResponse };
