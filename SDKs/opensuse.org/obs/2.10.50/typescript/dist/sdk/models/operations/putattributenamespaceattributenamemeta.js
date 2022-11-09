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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PutAttributeNamespaceAttributeNameMetaPathParams = /** @class */ (function (_super) {
    __extends(PutAttributeNamespaceAttributeNameMetaPathParams, _super);
    function PutAttributeNamespaceAttributeNameMetaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" }),
        __metadata("design:type", String)
    ], PutAttributeNamespaceAttributeNameMetaPathParams.prototype, "attributeName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], PutAttributeNamespaceAttributeNameMetaPathParams.prototype, "namespace", void 0);
    return PutAttributeNamespaceAttributeNameMetaPathParams;
}(SpeakeasyBase));
export { PutAttributeNamespaceAttributeNameMetaPathParams };
var PutAttributeNamespaceAttributeNameMetaSecurity = /** @class */ (function (_super) {
    __extends(PutAttributeNamespaceAttributeNameMetaSecurity, _super);
    function PutAttributeNamespaceAttributeNameMetaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], PutAttributeNamespaceAttributeNameMetaSecurity.prototype, "basicAuthentication", void 0);
    return PutAttributeNamespaceAttributeNameMetaSecurity;
}(SpeakeasyBase));
export { PutAttributeNamespaceAttributeNameMetaSecurity };
var PutAttributeNamespaceAttributeNameMetaRequest = /** @class */ (function (_super) {
    __extends(PutAttributeNamespaceAttributeNameMetaRequest, _super);
    function PutAttributeNamespaceAttributeNameMetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PutAttributeNamespaceAttributeNameMetaPathParams)
    ], PutAttributeNamespaceAttributeNameMetaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PutAttributeNamespaceAttributeNameMetaRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PutAttributeNamespaceAttributeNameMetaSecurity)
    ], PutAttributeNamespaceAttributeNameMetaRequest.prototype, "security", void 0);
    return PutAttributeNamespaceAttributeNameMetaRequest;
}(SpeakeasyBase));
export { PutAttributeNamespaceAttributeNameMetaRequest };
var PutAttributeNamespaceAttributeNameMetaResponse = /** @class */ (function (_super) {
    __extends(PutAttributeNamespaceAttributeNameMetaResponse, _super);
    function PutAttributeNamespaceAttributeNameMetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PutAttributeNamespaceAttributeNameMetaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PutAttributeNamespaceAttributeNameMetaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PutAttributeNamespaceAttributeNameMetaResponse.prototype, "statusCode", void 0);
    return PutAttributeNamespaceAttributeNameMetaResponse;
}(SpeakeasyBase));
export { PutAttributeNamespaceAttributeNameMetaResponse };
