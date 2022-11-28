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
var PostServersIdActionsPoweronPathParams = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronPathParams, _super);
    function PostServersIdActionsPoweronPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweronPathParams.prototype, "id", void 0);
    return PostServersIdActionsPoweronPathParams;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronPathParams };
// PostServersIdActionsPoweronActionResponseActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostServersIdActionsPoweronActionResponseActionError = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronActionResponseActionError, _super);
    function PostServersIdActionsPoweronActionResponseActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseActionError.prototype, "message", void 0);
    return PostServersIdActionsPoweronActionResponseActionError;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronActionResponseActionError };
var PostServersIdActionsPoweronActionResponseActionResources = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronActionResponseActionResources, _super);
    function PostServersIdActionsPoweronActionResponseActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweronActionResponseActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseActionResources.prototype, "type", void 0);
    return PostServersIdActionsPoweronActionResponseActionResources;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronActionResponseActionResources };
export var PostServersIdActionsPoweronActionResponseActionStatusEnum;
(function (PostServersIdActionsPoweronActionResponseActionStatusEnum) {
    PostServersIdActionsPoweronActionResponseActionStatusEnum["Success"] = "success";
    PostServersIdActionsPoweronActionResponseActionStatusEnum["Running"] = "running";
    PostServersIdActionsPoweronActionResponseActionStatusEnum["Error"] = "error";
})(PostServersIdActionsPoweronActionResponseActionStatusEnum || (PostServersIdActionsPoweronActionResponseActionStatusEnum = {}));
var PostServersIdActionsPoweronActionResponseAction = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronActionResponseAction, _super);
    function PostServersIdActionsPoweronActionResponseAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostServersIdActionsPoweronActionResponseActionError)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostServersIdActionsPoweronActionResponseActionResources }),
        __metadata("design:type", Array)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronActionResponseAction.prototype, "status", void 0);
    return PostServersIdActionsPoweronActionResponseAction;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronActionResponseAction };
var PostServersIdActionsPoweronActionResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronActionResponse, _super);
    function PostServersIdActionsPoweronActionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostServersIdActionsPoweronActionResponseAction)
    ], PostServersIdActionsPoweronActionResponse.prototype, "action", void 0);
    return PostServersIdActionsPoweronActionResponse;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronActionResponse };
var PostServersIdActionsPoweronRequest = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronRequest, _super);
    function PostServersIdActionsPoweronRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsPoweronPathParams)
    ], PostServersIdActionsPoweronRequest.prototype, "pathParams", void 0);
    return PostServersIdActionsPoweronRequest;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronRequest };
var PostServersIdActionsPoweronResponse = /** @class */ (function (_super) {
    __extends(PostServersIdActionsPoweronResponse, _super);
    function PostServersIdActionsPoweronResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostServersIdActionsPoweronActionResponse)
    ], PostServersIdActionsPoweronResponse.prototype, "actionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostServersIdActionsPoweronResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostServersIdActionsPoweronResponse.prototype, "statusCode", void 0);
    return PostServersIdActionsPoweronResponse;
}(SpeakeasyBase));
export { PostServersIdActionsPoweronResponse };
