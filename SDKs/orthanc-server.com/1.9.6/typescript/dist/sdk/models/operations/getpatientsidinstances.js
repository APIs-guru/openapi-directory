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
var GetPatientsIdInstancesPathParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdInstancesPathParams, _super);
    function GetPatientsIdInstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetPatientsIdInstancesPathParams.prototype, "id", void 0);
    return GetPatientsIdInstancesPathParams;
}(SpeakeasyBase));
export { GetPatientsIdInstancesPathParams };
var GetPatientsIdInstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetPatientsIdInstancesQueryParams, _super);
    function GetPatientsIdInstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdInstancesQueryParams.prototype, "full", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" }),
        __metadata("design:type", Boolean)
    ], GetPatientsIdInstancesQueryParams.prototype, "short", void 0);
    return GetPatientsIdInstancesQueryParams;
}(SpeakeasyBase));
export { GetPatientsIdInstancesQueryParams };
var GetPatientsIdInstancesRequest = /** @class */ (function (_super) {
    __extends(GetPatientsIdInstancesRequest, _super);
    function GetPatientsIdInstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdInstancesPathParams)
    ], GetPatientsIdInstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPatientsIdInstancesQueryParams)
    ], GetPatientsIdInstancesRequest.prototype, "queryParams", void 0);
    return GetPatientsIdInstancesRequest;
}(SpeakeasyBase));
export { GetPatientsIdInstancesRequest };
var GetPatientsIdInstancesResponse = /** @class */ (function (_super) {
    __extends(GetPatientsIdInstancesResponse, _super);
    function GetPatientsIdInstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPatientsIdInstancesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetPatientsIdInstancesResponse.prototype, "getPatientsIdInstances200ApplicationJsonAny", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPatientsIdInstancesResponse.prototype, "statusCode", void 0);
    return GetPatientsIdInstancesResponse;
}(SpeakeasyBase));
export { GetPatientsIdInstancesResponse };
