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
var GetFloatingIpsIdActionsActionIdPathParams = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdPathParams, _super);
    function GetFloatingIpsIdActionsActionIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=action_id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdPathParams.prototype, "actionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdPathParams.prototype, "id", void 0);
    return GetFloatingIpsIdActionsActionIdPathParams;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdPathParams };
// GetFloatingIpsIdActionsActionIdActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var GetFloatingIpsIdActionsActionIdActionResponseActionError = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdActionResponseActionError, _super);
    function GetFloatingIpsIdActionsActionIdActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseActionError.prototype, "message", void 0);
    return GetFloatingIpsIdActionsActionIdActionResponseActionError;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdActionResponseActionError };
var GetFloatingIpsIdActionsActionIdActionResponseActionResources = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdActionResponseActionResources, _super);
    function GetFloatingIpsIdActionsActionIdActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseActionResources.prototype, "type", void 0);
    return GetFloatingIpsIdActionsActionIdActionResponseActionResources;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdActionResponseActionResources };
export var GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum;
(function (GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum) {
    GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum["Success"] = "success";
    GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum["Running"] = "running";
    GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum["Error"] = "error";
})(GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum || (GetFloatingIpsIdActionsActionIdActionResponseActionStatusEnum = {}));
var GetFloatingIpsIdActionsActionIdActionResponseAction = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdActionResponseAction, _super);
    function GetFloatingIpsIdActionsActionIdActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetFloatingIpsIdActionsActionIdActionResponseActionError)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GetFloatingIpsIdActionsActionIdActionResponseActionResources }),
        __metadata("design:type", Array)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdActionResponseAction.prototype, "status", void 0);
    return GetFloatingIpsIdActionsActionIdActionResponseAction;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdActionResponseAction };
var GetFloatingIpsIdActionsActionIdActionResponse = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdActionResponse, _super);
    function GetFloatingIpsIdActionsActionIdActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", GetFloatingIpsIdActionsActionIdActionResponseAction)
    ], GetFloatingIpsIdActionsActionIdActionResponse.prototype, "action", void 0);
    return GetFloatingIpsIdActionsActionIdActionResponse;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdActionResponse };
var GetFloatingIpsIdActionsActionIdRequest = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdRequest, _super);
    function GetFloatingIpsIdActionsActionIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdActionsActionIdPathParams)
    ], GetFloatingIpsIdActionsActionIdRequest.prototype, "pathParams", void 0);
    return GetFloatingIpsIdActionsActionIdRequest;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdRequest };
var GetFloatingIpsIdActionsActionIdResponse = /** @class */ (function (_super) {
    __extends(GetFloatingIpsIdActionsActionIdResponse, _super);
    function GetFloatingIpsIdActionsActionIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFloatingIpsIdActionsActionIdActionResponse)
    ], GetFloatingIpsIdActionsActionIdResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFloatingIpsIdActionsActionIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFloatingIpsIdActionsActionIdResponse.prototype, "statusCode", void 0);
    return GetFloatingIpsIdActionsActionIdResponse;
}(SpeakeasyBase));
export { GetFloatingIpsIdActionsActionIdResponse };
