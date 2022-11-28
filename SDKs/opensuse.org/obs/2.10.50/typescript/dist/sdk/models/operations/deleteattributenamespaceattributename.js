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
var DeleteAttributeNamespaceAttributeNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNamePathParams, _super);
    function DeleteAttributeNamespaceAttributeNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" }),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNamePathParams.prototype, "attributeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNamePathParams.prototype, "namespace", void 0);
    return DeleteAttributeNamespaceAttributeNamePathParams;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNamePathParams };
var DeleteAttributeNamespaceAttributeNameSecurity = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameSecurity, _super);
    function DeleteAttributeNamespaceAttributeNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], DeleteAttributeNamespaceAttributeNameSecurity.prototype, "basicAuthentication", void 0);
    return DeleteAttributeNamespaceAttributeNameSecurity;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameSecurity };
var DeleteAttributeNamespaceAttributeNameRequest = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameRequest, _super);
    function DeleteAttributeNamespaceAttributeNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAttributeNamespaceAttributeNamePathParams)
    ], DeleteAttributeNamespaceAttributeNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteAttributeNamespaceAttributeNameSecurity)
    ], DeleteAttributeNamespaceAttributeNameRequest.prototype, "security", void 0);
    return DeleteAttributeNamespaceAttributeNameRequest;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameRequest };
var DeleteAttributeNamespaceAttributeNameResponse = /** @class */ (function (_super) {
    __extends(DeleteAttributeNamespaceAttributeNameResponse, _super);
    function DeleteAttributeNamespaceAttributeNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteAttributeNamespaceAttributeNameResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteAttributeNamespaceAttributeNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteAttributeNamespaceAttributeNameResponse.prototype, "statusCode", void 0);
    return DeleteAttributeNamespaceAttributeNameResponse;
}(SpeakeasyBase));
export { DeleteAttributeNamespaceAttributeNameResponse };
