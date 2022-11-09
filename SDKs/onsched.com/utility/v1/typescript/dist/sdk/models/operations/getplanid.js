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
var GetPlanIdPathParams = /** @class */ (function (_super) {
    __extends(GetPlanIdPathParams, _super);
    function GetPlanIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=planId" }),
        __metadata("design:type", String)
    ], GetPlanIdPathParams.prototype, "planId", void 0);
    return GetPlanIdPathParams;
}(SpeakeasyBase));
export { GetPlanIdPathParams };
var GetPlanIdQueryParams = /** @class */ (function (_super) {
    __extends(GetPlanIdQueryParams, _super);
    function GetPlanIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=locationId" }),
        __metadata("design:type", String)
    ], GetPlanIdQueryParams.prototype, "locationId", void 0);
    return GetPlanIdQueryParams;
}(SpeakeasyBase));
export { GetPlanIdQueryParams };
var GetPlanIdRequest = /** @class */ (function (_super) {
    __extends(GetPlanIdRequest, _super);
    function GetPlanIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetPlanIdPathParams)
    ], GetPlanIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetPlanIdQueryParams)
    ], GetPlanIdRequest.prototype, "queryParams", void 0);
    return GetPlanIdRequest;
}(SpeakeasyBase));
export { GetPlanIdRequest };
var GetPlanIdResponse = /** @class */ (function (_super) {
    __extends(GetPlanIdResponse, _super);
    function GetPlanIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetPlanIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetPlanIdResponse.prototype, "statusCode", void 0);
    return GetPlanIdResponse;
}(SpeakeasyBase));
export { GetPlanIdResponse };
