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
var UpdateOrganizationSamlPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlPathParams, _super);
    function UpdateOrganizationSamlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationSamlPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationSamlPathParams };
var UpdateOrganizationSamlRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRequestBody, _super);
    function UpdateOrganizationSamlRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationSamlRequestBody.prototype, "enabled", void 0);
    return UpdateOrganizationSamlRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRequestBody };
var UpdateOrganizationSamlRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlRequest, _super);
    function UpdateOrganizationSamlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationSamlPathParams)
    ], UpdateOrganizationSamlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationSamlRequestBody)
    ], UpdateOrganizationSamlRequest.prototype, "request", void 0);
    return UpdateOrganizationSamlRequest;
}(SpeakeasyBase));
export { UpdateOrganizationSamlRequest };
var UpdateOrganizationSamlResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationSamlResponse, _super);
    function UpdateOrganizationSamlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationSamlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationSamlResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationSamlResponse.prototype, "updateOrganizationSaml200ApplicationJsonObject", void 0);
    return UpdateOrganizationSamlResponse;
}(SpeakeasyBase));
export { UpdateOrganizationSamlResponse };
