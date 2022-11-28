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
var DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams, _super);
    function DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=custom_field_select_option_id" }),
        __metadata("design:type", Number)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams.prototype, "customFieldSelectOptionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams.prototype, "id", void 0);
    return DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;
}(SpeakeasyBase));
export { DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams };
var DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams, _super);
    function DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams.prototype, "login", void 0);
    return DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}(SpeakeasyBase));
export { DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams };
var DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, _super);
    function DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest.prototype, "queryParams", void 0);
    return DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest;
}(SpeakeasyBase));
export { DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest };
var DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse, _super);
    function DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse.prototype, "deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse.prototype, "statusCode", void 0);
    return DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse;
}(SpeakeasyBase));
export { DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse };
