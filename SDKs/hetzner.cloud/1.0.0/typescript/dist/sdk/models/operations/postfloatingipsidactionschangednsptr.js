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
var PostFloatingIpsIdActionsChangeDnsPtrPathParams = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrPathParams, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeDnsPtrPathParams.prototype, "id", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrPathParams;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrPathParams };
var PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dns_ptr" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest.prototype, "dnsPtr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest.prototype, "ip", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest };
// PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError.prototype, "message", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError };
var PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources.prototype, "type", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources };
export var PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum;
(function (PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum) {
    PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum["Success"] = "success";
    PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum["Running"] = "running";
    PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum["Error"] = "error";
})(PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum || (PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionStatusEnum = {}));
var PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionError)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostFloatingIpsIdActionsChangeDnsPtrActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction.prototype, "status", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction };
var PostFloatingIpsIdActionsChangeDnsPtrActionResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrActionResponse, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeDnsPtrActionResponseAction)
    ], PostFloatingIpsIdActionsChangeDnsPtrActionResponse.prototype, "action", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrActionResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrActionResponse };
var PostFloatingIpsIdActionsChangeDnsPtrRequest = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrRequest, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsChangeDnsPtrPathParams)
    ], PostFloatingIpsIdActionsChangeDnsPtrRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostFloatingIpsIdActionsChangeDnsPtrChangeDnsptrRequest)
    ], PostFloatingIpsIdActionsChangeDnsPtrRequest.prototype, "request", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrRequest;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrRequest };
var PostFloatingIpsIdActionsChangeDnsPtrResponse = /** @class */ (function (_super) {
    __extends(PostFloatingIpsIdActionsChangeDnsPtrResponse, _super);
    function PostFloatingIpsIdActionsChangeDnsPtrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFloatingIpsIdActionsChangeDnsPtrActionResponse)
    ], PostFloatingIpsIdActionsChangeDnsPtrResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFloatingIpsIdActionsChangeDnsPtrResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFloatingIpsIdActionsChangeDnsPtrResponse.prototype, "statusCode", void 0);
    return PostFloatingIpsIdActionsChangeDnsPtrResponse;
}(SpeakeasyBase));
export { PostFloatingIpsIdActionsChangeDnsPtrResponse };
