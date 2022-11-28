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
var PutSetupV1LocationsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdPathParams, _super);
    function PutSetupV1LocationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1LocationsIdPathParams.prototype, "id", void 0);
    return PutSetupV1LocationsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdPathParams };
var PutSetupV1LocationsIdQueryParams = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdQueryParams, _super);
    function PutSetupV1LocationsIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=removeRegion" }),
        __metadata("design:type", Boolean)
    ], PutSetupV1LocationsIdQueryParams.prototype, "removeRegion", void 0);
    return PutSetupV1LocationsIdQueryParams;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdQueryParams };
var PutSetupV1LocationsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdRequests, _super);
    function PutSetupV1LocationsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.LocationUpdateModel)
    ], PutSetupV1LocationsIdRequests.prototype, "locationUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LocationUpdateModel)
    ], PutSetupV1LocationsIdRequests.prototype, "locationUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.LocationUpdateModel)
    ], PutSetupV1LocationsIdRequests.prototype, "locationUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.LocationUpdateModel)
    ], PutSetupV1LocationsIdRequests.prototype, "locationUpdateModel3", void 0);
    return PutSetupV1LocationsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdRequests };
var PutSetupV1LocationsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdRequest, _super);
    function PutSetupV1LocationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1LocationsIdPathParams)
    ], PutSetupV1LocationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1LocationsIdQueryParams)
    ], PutSetupV1LocationsIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1LocationsIdRequests)
    ], PutSetupV1LocationsIdRequest.prototype, "request", void 0);
    return PutSetupV1LocationsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdRequest };
var PutSetupV1LocationsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1LocationsIdResponse, _super);
    function PutSetupV1LocationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1LocationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LocationViewModel)
    ], PutSetupV1LocationsIdResponse.prototype, "locationViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1LocationsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1LocationsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1LocationsIdResponse };
