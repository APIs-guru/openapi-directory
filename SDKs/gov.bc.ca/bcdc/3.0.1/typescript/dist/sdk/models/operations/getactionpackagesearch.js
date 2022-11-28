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
var GetActionPackageSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetActionPackageSearchQueryParams, _super);
    function GetActionPackageSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetActionPackageSearchQueryParams.prototype, "q", void 0);
    return GetActionPackageSearchQueryParams;
}(SpeakeasyBase));
export { GetActionPackageSearchQueryParams };
var GetActionPackageSearchRequest = /** @class */ (function (_super) {
    __extends(GetActionPackageSearchRequest, _super);
    function GetActionPackageSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetActionPackageSearchQueryParams)
    ], GetActionPackageSearchRequest.prototype, "queryParams", void 0);
    return GetActionPackageSearchRequest;
}(SpeakeasyBase));
export { GetActionPackageSearchRequest };
var GetActionPackageSearchResponse = /** @class */ (function (_super) {
    __extends(GetActionPackageSearchResponse, _super);
    function GetActionPackageSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetActionPackageSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetActionPackageSearchResponse.prototype, "statusCode", void 0);
    return GetActionPackageSearchResponse;
}(SpeakeasyBase));
export { GetActionPackageSearchResponse };
