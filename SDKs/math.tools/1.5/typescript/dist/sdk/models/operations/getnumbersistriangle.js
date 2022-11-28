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
var GetNumbersIsTriangleQueryParams = /** @class */ (function (_super) {
    __extends(GetNumbersIsTriangleQueryParams, _super);
    function GetNumbersIsTriangleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" }),
        __metadata("design:type", Number)
    ], GetNumbersIsTriangleQueryParams.prototype, "number", void 0);
    return GetNumbersIsTriangleQueryParams;
}(SpeakeasyBase));
export { GetNumbersIsTriangleQueryParams };
var GetNumbersIsTriangleSecurity = /** @class */ (function (_super) {
    __extends(GetNumbersIsTriangleSecurity, _super);
    function GetNumbersIsTriangleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeXMathtoolsApiSecret)
    ], GetNumbersIsTriangleSecurity.prototype, "xMathtoolsApiSecret", void 0);
    return GetNumbersIsTriangleSecurity;
}(SpeakeasyBase));
export { GetNumbersIsTriangleSecurity };
var GetNumbersIsTriangleRequest = /** @class */ (function (_super) {
    __extends(GetNumbersIsTriangleRequest, _super);
    function GetNumbersIsTriangleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersIsTriangleQueryParams)
    ], GetNumbersIsTriangleRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetNumbersIsTriangleSecurity)
    ], GetNumbersIsTriangleRequest.prototype, "security", void 0);
    return GetNumbersIsTriangleRequest;
}(SpeakeasyBase));
export { GetNumbersIsTriangleRequest };
var GetNumbersIsTriangleResponse = /** @class */ (function (_super) {
    __extends(GetNumbersIsTriangleResponse, _super);
    function GetNumbersIsTriangleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetNumbersIsTriangleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetNumbersIsTriangleResponse.prototype, "statusCode", void 0);
    return GetNumbersIsTriangleResponse;
}(SpeakeasyBase));
export { GetNumbersIsTriangleResponse };
