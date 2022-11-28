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
var PutCustomFieldsIdJsonPathParams = /** @class */ (function (_super) {
    __extends(PutCustomFieldsIdJsonPathParams, _super);
    function PutCustomFieldsIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutCustomFieldsIdJsonPathParams.prototype, "id", void 0);
    return PutCustomFieldsIdJsonPathParams;
}(SpeakeasyBase));
export { PutCustomFieldsIdJsonPathParams };
var PutCustomFieldsIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(PutCustomFieldsIdJsonQueryParams, _super);
    function PutCustomFieldsIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], PutCustomFieldsIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], PutCustomFieldsIdJsonQueryParams.prototype, "login", void 0);
    return PutCustomFieldsIdJsonQueryParams;
}(SpeakeasyBase));
export { PutCustomFieldsIdJsonQueryParams };
var PutCustomFieldsIdJsonRequest = /** @class */ (function (_super) {
    __extends(PutCustomFieldsIdJsonRequest, _super);
    function PutCustomFieldsIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCustomFieldsIdJsonPathParams)
    ], PutCustomFieldsIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCustomFieldsIdJsonQueryParams)
    ], PutCustomFieldsIdJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomFieldEdit)
    ], PutCustomFieldsIdJsonRequest.prototype, "request", void 0);
    return PutCustomFieldsIdJsonRequest;
}(SpeakeasyBase));
export { PutCustomFieldsIdJsonRequest };
var PutCustomFieldsIdJsonResponse = /** @class */ (function (_super) {
    __extends(PutCustomFieldsIdJsonResponse, _super);
    function PutCustomFieldsIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCustomFieldsIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomField)
    ], PutCustomFieldsIdJsonResponse.prototype, "customField", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PutCustomFieldsIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCustomFieldsIdJsonResponse.prototype, "statusCode", void 0);
    return PutCustomFieldsIdJsonResponse;
}(SpeakeasyBase));
export { PutCustomFieldsIdJsonResponse };
