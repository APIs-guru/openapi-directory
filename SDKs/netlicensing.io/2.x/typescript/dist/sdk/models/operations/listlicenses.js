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
var ListLicensesSecurity = /** @class */ (function (_super) {
    __extends(ListLicensesSecurity, _super);
    function ListLicensesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuth)
    ], ListLicensesSecurity.prototype, "basicAuth", void 0);
    return ListLicensesSecurity;
}(SpeakeasyBase));
export { ListLicensesSecurity };
var ListLicensesRequest = /** @class */ (function (_super) {
    __extends(ListLicensesRequest, _super);
    function ListLicensesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ListLicensesSecurity)
    ], ListLicensesRequest.prototype, "security", void 0);
    return ListLicensesRequest;
}(SpeakeasyBase));
export { ListLicensesRequest };
var ListLicensesResponse = /** @class */ (function (_super) {
    __extends(ListLicensesResponse, _super);
    function ListLicensesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ListLicensesResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListLicensesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListLicensesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], ListLicensesResponse.prototype, "netlicensings", void 0);
    return ListLicensesResponse;
}(SpeakeasyBase));
export { ListLicensesResponse };
