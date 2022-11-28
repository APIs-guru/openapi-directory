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
var PostAttributeNamespaceAttributeNameMetaPathParams = /** @class */ (function (_super) {
    __extends(PostAttributeNamespaceAttributeNameMetaPathParams, _super);
    function PostAttributeNamespaceAttributeNameMetaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" }),
        __metadata("design:type", String)
    ], PostAttributeNamespaceAttributeNameMetaPathParams.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], PostAttributeNamespaceAttributeNameMetaPathParams.prototype, "namespace", void 0);
    return PostAttributeNamespaceAttributeNameMetaPathParams;
}(SpeakeasyBase));
export { PostAttributeNamespaceAttributeNameMetaPathParams };
var PostAttributeNamespaceAttributeNameMetaSecurity = /** @class */ (function (_super) {
    __extends(PostAttributeNamespaceAttributeNameMetaSecurity, _super);
    function PostAttributeNamespaceAttributeNameMetaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PostAttributeNamespaceAttributeNameMetaSecurity.prototype, "basicAuthentication", void 0);
    return PostAttributeNamespaceAttributeNameMetaSecurity;
}(SpeakeasyBase));
export { PostAttributeNamespaceAttributeNameMetaSecurity };
var PostAttributeNamespaceAttributeNameMetaRequest = /** @class */ (function (_super) {
    __extends(PostAttributeNamespaceAttributeNameMetaRequest, _super);
    function PostAttributeNamespaceAttributeNameMetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAttributeNamespaceAttributeNameMetaPathParams)
    ], PostAttributeNamespaceAttributeNameMetaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostAttributeNamespaceAttributeNameMetaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostAttributeNamespaceAttributeNameMetaSecurity)
    ], PostAttributeNamespaceAttributeNameMetaRequest.prototype, "security", void 0);
    return PostAttributeNamespaceAttributeNameMetaRequest;
}(SpeakeasyBase));
export { PostAttributeNamespaceAttributeNameMetaRequest };
var PostAttributeNamespaceAttributeNameMetaResponse = /** @class */ (function (_super) {
    __extends(PostAttributeNamespaceAttributeNameMetaResponse, _super);
    function PostAttributeNamespaceAttributeNameMetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostAttributeNamespaceAttributeNameMetaResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostAttributeNamespaceAttributeNameMetaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostAttributeNamespaceAttributeNameMetaResponse.prototype, "statusCode", void 0);
    return PostAttributeNamespaceAttributeNameMetaResponse;
}(SpeakeasyBase));
export { PostAttributeNamespaceAttributeNameMetaResponse };
