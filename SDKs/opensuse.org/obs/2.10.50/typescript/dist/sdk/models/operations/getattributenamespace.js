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
var GetAttributeNamespacePathParams = /** @class */ (function (_super) {
    __extends(GetAttributeNamespacePathParams, _super);
    function GetAttributeNamespacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], GetAttributeNamespacePathParams.prototype, "namespace", void 0);
    return GetAttributeNamespacePathParams;
}(SpeakeasyBase));
export { GetAttributeNamespacePathParams };
var GetAttributeNamespaceSecurity = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceSecurity, _super);
    function GetAttributeNamespaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetAttributeNamespaceSecurity.prototype, "basicAuthentication", void 0);
    return GetAttributeNamespaceSecurity;
}(SpeakeasyBase));
export { GetAttributeNamespaceSecurity };
var GetAttributeNamespaceRequest = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceRequest, _super);
    function GetAttributeNamespaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributeNamespacePathParams)
    ], GetAttributeNamespaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAttributeNamespaceSecurity)
    ], GetAttributeNamespaceRequest.prototype, "security", void 0);
    return GetAttributeNamespaceRequest;
}(SpeakeasyBase));
export { GetAttributeNamespaceRequest };
var GetAttributeNamespaceResponse = /** @class */ (function (_super) {
    __extends(GetAttributeNamespaceResponse, _super);
    function GetAttributeNamespaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetAttributeNamespaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAttributeNamespaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAttributeNamespaceResponse.prototype, "statusCode", void 0);
    return GetAttributeNamespaceResponse;
}(SpeakeasyBase));
export { GetAttributeNamespaceResponse };
