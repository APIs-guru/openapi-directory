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
var GetCertificatesIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdPathParams, _super);
    function GetCertificatesIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetCertificatesIdActionsActionIdPathParams;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdPathParams };
// GetCertificatesIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetCertificatesIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdActionResponseActionError, _super);
    function GetCertificatesIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetCertificatesIdActionsActionIdActionResponseActionError;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdActionResponseActionError };
var GetCertificatesIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdActionResponseActionResources, _super);
    function GetCertificatesIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetCertificatesIdActionsActionIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdActionResponseActionResources };
export var GetCertificatesIdActionsActionIdActionResponseActionStatusEnum;
(function (GetCertificatesIdActionsActionIdActionResponseActionStatusEnum) {
    GetCertificatesIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetCertificatesIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetCertificatesIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetCertificatesIdActionsActionIdActionResponseActionStatusEnum || (GetCertificatesIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetCertificatesIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdActionResponseAction, _super);
    function GetCertificatesIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetCertificatesIdActionsActionIdActionResponseActionError)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetCertificatesIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetCertificatesIdActionsActionIdActionResponseAction;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdActionResponseAction };
var GetCertificatesIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdActionResponse, _super);
    function GetCertificatesIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetCertificatesIdActionsActionIdActionResponseAction)
    ], GetCertificatesIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetCertificatesIdActionsActionIdActionResponse;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdActionResponse };
var GetCertificatesIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdRequest, _super);
    function GetCertificatesIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCertificatesIdActionsActionIdPathParams)
    ], GetCertificatesIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetCertificatesIdActionsActionIdRequest;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdRequest };
var GetCertificatesIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdActionsActionIdResponse, _super);
    function GetCertificatesIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCertificatesIdActionsActionIdActionResponse)
    ], GetCertificatesIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCertificatesIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCertificatesIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetCertificatesIdActionsActionIdResponse;
}(SpeakeasyBase));
export { GetCertificatesIdActionsActionIdResponse };
