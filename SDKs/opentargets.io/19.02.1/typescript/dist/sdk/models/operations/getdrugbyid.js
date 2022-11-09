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
var GetDrugByIdPathParams = /** @class */ (function (_super) {
    __extends(GetDrugByIdPathParams, _super);
    function GetDrugByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=DRUG_ID" }),
        __metadata("design:type", String)
    ], GetDrugByIdPathParams.prototype, "drugId", void 0);
    return GetDrugByIdPathParams;
}(SpeakeasyBase));
export { GetDrugByIdPathParams };
var GetDrugByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetDrugByIdQueryParams, _super);
    function GetDrugByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=drug_id" }),
        __metadata("design:type", String)
    ], GetDrugByIdQueryParams.prototype, "drugId", void 0);
    return GetDrugByIdQueryParams;
}(SpeakeasyBase));
export { GetDrugByIdQueryParams };
var GetDrugByIdRequest = /** @class */ (function (_super) {
    __extends(GetDrugByIdRequest, _super);
    function GetDrugByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetDrugByIdPathParams)
    ], GetDrugByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetDrugByIdQueryParams)
    ], GetDrugByIdRequest.prototype, "queryParams", void 0);
    return GetDrugByIdRequest;
}(SpeakeasyBase));
export { GetDrugByIdRequest };
var GetDrugByIdResponse = /** @class */ (function (_super) {
    __extends(GetDrugByIdResponse, _super);
    function GetDrugByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetDrugByIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetDrugByIdResponse.prototype, "statusCode", void 0);
    return GetDrugByIdResponse;
}(SpeakeasyBase));
export { GetDrugByIdResponse };
