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
var DeleteCustomersIdFieldsFieldIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteCustomersIdFieldsFieldIdPathParams, _super);
    function DeleteCustomersIdFieldsFieldIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=field_id" }),
        __metadata("design:type", Number)
    ], DeleteCustomersIdFieldsFieldIdPathParams.prototype, "fieldId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteCustomersIdFieldsFieldIdPathParams.prototype, "id", void 0);
    return DeleteCustomersIdFieldsFieldIdPathParams;
}(SpeakeasyBase));
export { DeleteCustomersIdFieldsFieldIdPathParams };
var DeleteCustomersIdFieldsFieldIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteCustomersIdFieldsFieldIdQueryParams, _super);
    function DeleteCustomersIdFieldsFieldIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], DeleteCustomersIdFieldsFieldIdQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], DeleteCustomersIdFieldsFieldIdQueryParams.prototype, "login", void 0);
    return DeleteCustomersIdFieldsFieldIdQueryParams;
}(SpeakeasyBase));
export { DeleteCustomersIdFieldsFieldIdQueryParams };
var DeleteCustomersIdFieldsFieldIdRequest = /** @class */ (function (_super) {
    __extends(DeleteCustomersIdFieldsFieldIdRequest, _super);
    function DeleteCustomersIdFieldsFieldIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomersIdFieldsFieldIdPathParams)
    ], DeleteCustomersIdFieldsFieldIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteCustomersIdFieldsFieldIdQueryParams)
    ], DeleteCustomersIdFieldsFieldIdRequest.prototype, "queryParams", void 0);
    return DeleteCustomersIdFieldsFieldIdRequest;
}(SpeakeasyBase));
export { DeleteCustomersIdFieldsFieldIdRequest };
var DeleteCustomersIdFieldsFieldIdResponse = /** @class */ (function (_super) {
    __extends(DeleteCustomersIdFieldsFieldIdResponse, _super);
    function DeleteCustomersIdFieldsFieldIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomersIdFieldsFieldIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteCustomersIdFieldsFieldIdResponse.prototype, "deleteCustomersIdFieldsFieldId200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], DeleteCustomersIdFieldsFieldIdResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteCustomersIdFieldsFieldIdResponse.prototype, "statusCode", void 0);
    return DeleteCustomersIdFieldsFieldIdResponse;
}(SpeakeasyBase));
export { DeleteCustomersIdFieldsFieldIdResponse };
