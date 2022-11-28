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
var GetActionsIdPathParams = /** @class */ (function (_super) {
    __extends(GetActionsIdPathParams, _super);
    function GetActionsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetActionsIdPathParams.prototype, "id", void 0);
    return GetActionsIdPathParams;
}(SpeakeasyBase));
export { GetActionsIdPathParams };
// GetActionsIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetActionsIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetActionsIdActionResponseActionError, _super);
    function GetActionsIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseActionError.prototype, "message", void 0);
    return GetActionsIdActionResponseActionError;
}(SpeakeasyBase));
export { GetActionsIdActionResponseActionError };
var GetActionsIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetActionsIdActionResponseActionResources, _super);
    function GetActionsIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetActionsIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseActionResources.prototype, "type", void 0);
    return GetActionsIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetActionsIdActionResponseActionResources };
export var GetActionsIdActionResponseActionStatusEnum;
(function (GetActionsIdActionResponseActionStatusEnum) {
    GetActionsIdActionResponseActionStatusEnum["Success"] = "success";
    GetActionsIdActionResponseActionStatusEnum["Running"] = "running";
    GetActionsIdActionResponseActionStatusEnum["Error"] = "error";
})(GetActionsIdActionResponseActionStatusEnum || (GetActionsIdActionResponseActionStatusEnum = {}));
var GetActionsIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetActionsIdActionResponseAction, _super);
    function GetActionsIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetActionsIdActionResponseActionError)
    ], GetActionsIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetActionsIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetActionsIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetActionsIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetActionsIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetActionsIdActionResponseAction.prototype, "status", void 0);
    return GetActionsIdActionResponseAction;
}(SpeakeasyBase));
export { GetActionsIdActionResponseAction };
var GetActionsIdActionResponse = /** @class */ (function (_super) {
    __extends(GetActionsIdActionResponse, _super);
    function GetActionsIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetActionsIdActionResponseAction)
    ], GetActionsIdActionResponse.prototype, "action", void 0);
    return GetActionsIdActionResponse;
}(SpeakeasyBase));
export { GetActionsIdActionResponse };
var GetActionsIdRequest = /** @class */ (function (_super) {
    __extends(GetActionsIdRequest, _super);
    function GetActionsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActionsIdPathParams)
    ], GetActionsIdRequest.prototype, "pathParams", void 0);
    return GetActionsIdRequest;
}(SpeakeasyBase));
export { GetActionsIdRequest };
var GetActionsIdResponse = /** @class */ (function (_super) {
    __extends(GetActionsIdResponse, _super);
    function GetActionsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActionsIdActionResponse)
    ], GetActionsIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetActionsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetActionsIdResponse.prototype, "statusCode", void 0);
    return GetActionsIdResponse;
}(SpeakeasyBase));
export { GetActionsIdResponse };
