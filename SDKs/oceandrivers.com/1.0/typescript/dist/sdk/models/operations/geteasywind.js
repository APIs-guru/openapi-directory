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
var GetEasywindPathParams = /** @class */ (function (_super) {
    __extends(GetEasywindPathParams, _super);
    function GetEasywindPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=easywindId" }),
        __metadata("design:type", String)
    ], GetEasywindPathParams.prototype, "easywindId", void 0);
    return GetEasywindPathParams;
}(SpeakeasyBase));
export { GetEasywindPathParams };
var GetEasywindQueryParams = /** @class */ (function (_super) {
    __extends(GetEasywindQueryParams, _super);
    function GetEasywindQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=period" }),
        __metadata("design:type", String)
    ], GetEasywindQueryParams.prototype, "period", void 0);
    return GetEasywindQueryParams;
}(SpeakeasyBase));
export { GetEasywindQueryParams };
var GetEasywindRequest = /** @class */ (function (_super) {
    __extends(GetEasywindRequest, _super);
    function GetEasywindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetEasywindPathParams)
    ], GetEasywindRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetEasywindQueryParams)
    ], GetEasywindRequest.prototype, "queryParams", void 0);
    return GetEasywindRequest;
}(SpeakeasyBase));
export { GetEasywindRequest };
var GetEasywindResponse = /** @class */ (function (_super) {
    __extends(GetEasywindResponse, _super);
    function GetEasywindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetEasywindResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetEasywindResponse.prototype, "statusCode", void 0);
    return GetEasywindResponse;
}(SpeakeasyBase));
export { GetEasywindResponse };
