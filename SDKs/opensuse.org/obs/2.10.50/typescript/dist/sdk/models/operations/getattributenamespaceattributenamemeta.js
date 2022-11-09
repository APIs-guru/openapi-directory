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
var GetAttributeNamespaceAttributeNameMetaPathParams = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceAttributeNameMetaPathParams, _super);
    function GetAttributeNamespaceAttributeNameMetaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" }),
        __metadata("design:type", String)
    ], GetAttributeNamespaceAttributeNameMetaPathParams.prototype, "attributeName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], GetAttributeNamespaceAttributeNameMetaPathParams.prototype, "namespace", void 0);
    return GetAttributeNamespaceAttributeNameMetaPathParams;
}(SpeakeasyBase));
export { GetAttributeNamespaceAttributeNameMetaPathParams };
var GetAttributeNamespaceAttributeNameMetaSecurity = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceAttributeNameMetaSecurity, _super);
    function GetAttributeNamespaceAttributeNameMetaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetAttributeNamespaceAttributeNameMetaSecurity.prototype, "basicAuthentication", void 0);
    return GetAttributeNamespaceAttributeNameMetaSecurity;
}(SpeakeasyBase));
export { GetAttributeNamespaceAttributeNameMetaSecurity };
var GetAttributeNamespaceAttributeNameMetaRequest = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceAttributeNameMetaRequest, _super);
    function GetAttributeNamespaceAttributeNameMetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttributeNamespaceAttributeNameMetaPathParams)
    ], GetAttributeNamespaceAttributeNameMetaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAttributeNamespaceAttributeNameMetaSecurity)
    ], GetAttributeNamespaceAttributeNameMetaRequest.prototype, "security", void 0);
    return GetAttributeNamespaceAttributeNameMetaRequest;
}(SpeakeasyBase));
export { GetAttributeNamespaceAttributeNameMetaRequest };
var GetAttributeNamespaceAttributeNameMetaResponse = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceAttributeNameMetaResponse, _super);
    function GetAttributeNamespaceAttributeNameMetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttributeNamespaceAttributeNameMetaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAttributeNamespaceAttributeNameMetaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAttributeNamespaceAttributeNameMetaResponse.prototype, "statusCode", void 0);
    return GetAttributeNamespaceAttributeNameMetaResponse;
}(SpeakeasyBase));
export { GetAttributeNamespaceAttributeNameMetaResponse };
