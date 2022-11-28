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
import * as shared from "../shared";
var ResizeDiskPathParams = /** @class */ (function (_super) {
    __extends(ResizeDiskPathParams, _super);
    function ResizeDiskPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=diskId" }),
        __metadata("design:type", Number)
    ], ResizeDiskPathParams.prototype, "diskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], ResizeDiskPathParams.prototype, "linodeId", void 0);
    return ResizeDiskPathParams;
}(SpeakeasyBase));
export { ResizeDiskPathParams };
var ResizeDiskSecurity = /** @class */ (function (_super) {
    __extends(ResizeDiskSecurity, _super);
    function ResizeDiskSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResizeDiskSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResizeDiskSecurity.prototype, "oauth", void 0);
    return ResizeDiskSecurity;
}(SpeakeasyBase));
export { ResizeDiskSecurity };
var ResizeDiskDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResizeDiskDefaultApplicationJson, _super);
    function ResizeDiskDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResizeDiskDefaultApplicationJson.prototype, "errors", void 0);
    return ResizeDiskDefaultApplicationJson;
}(SpeakeasyBase));
export { ResizeDiskDefaultApplicationJson };
var ResizeDiskRequest = /** @class */ (function (_super) {
    __extends(ResizeDiskRequest, _super);
    function ResizeDiskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeDiskPathParams)
    ], ResizeDiskRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ResizeDiskRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeDiskSecurity)
    ], ResizeDiskRequest.prototype, "security", void 0);
    return ResizeDiskRequest;
}(SpeakeasyBase));
export { ResizeDiskRequest };
var ResizeDiskResponse = /** @class */ (function (_super) {
    __extends(ResizeDiskResponse, _super);
    function ResizeDiskResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResizeDiskResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResizeDiskResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResizeDiskResponse.prototype, "resizeDisk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeDiskDefaultApplicationJson)
    ], ResizeDiskResponse.prototype, "resizeDiskDefaultApplicationJsonObject", void 0);
    return ResizeDiskResponse;
}(SpeakeasyBase));
export { ResizeDiskResponse };
