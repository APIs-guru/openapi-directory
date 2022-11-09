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
var DeleteAttributeNamespaceAttributeNameMetaPathParams = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameMetaPathParams, _super);
    function DeleteAttributeNamespaceAttributeNameMetaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" }),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNameMetaPathParams.prototype, "attributeName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNameMetaPathParams.prototype, "namespace", void 0);
    return DeleteAttributeNamespaceAttributeNameMetaPathParams;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameMetaPathParams };
var DeleteAttributeNamespaceAttributeNameMetaSecurity = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameMetaSecurity, _super);
    function DeleteAttributeNamespaceAttributeNameMetaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], DeleteAttributeNamespaceAttributeNameMetaSecurity.prototype, "basicAuthentication", void 0);
    return DeleteAttributeNamespaceAttributeNameMetaSecurity;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameMetaSecurity };
var DeleteAttributeNamespaceAttributeNameMetaRequest = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameMetaRequest, _super);
    function DeleteAttributeNamespaceAttributeNameMetaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAttributeNamespaceAttributeNameMetaPathParams)
    ], DeleteAttributeNamespaceAttributeNameMetaRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteAttributeNamespaceAttributeNameMetaSecurity)
    ], DeleteAttributeNamespaceAttributeNameMetaRequest.prototype, "security", void 0);
    return DeleteAttributeNamespaceAttributeNameMetaRequest;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameMetaRequest };
var DeleteAttributeNamespaceAttributeNameMetaResponse = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameMetaResponse, _super);
    function DeleteAttributeNamespaceAttributeNameMetaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteAttributeNamespaceAttributeNameMetaResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNameMetaResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteAttributeNamespaceAttributeNameMetaResponse.prototype, "statusCode", void 0);
    return DeleteAttributeNamespaceAttributeNameMetaResponse;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameMetaResponse };
