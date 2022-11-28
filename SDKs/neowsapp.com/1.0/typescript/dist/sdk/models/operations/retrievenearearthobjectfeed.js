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
var RetrieveNearEarthObjectFeedQueryParams = /** @class */ (function (_super) {
    __extends(RetrieveNearEarthObjectFeedQueryParams, _super);
    function RetrieveNearEarthObjectFeedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailed" }),
        __metadata("design:type", Boolean)
    ], RetrieveNearEarthObjectFeedQueryParams.prototype, "detailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], RetrieveNearEarthObjectFeedQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], RetrieveNearEarthObjectFeedQueryParams.prototype, "startDate", void 0);
    return RetrieveNearEarthObjectFeedQueryParams;
}(SpeakeasyBase));
export { RetrieveNearEarthObjectFeedQueryParams };
var RetrieveNearEarthObjectFeedRequest = /** @class */ (function (_super) {
    __extends(RetrieveNearEarthObjectFeedRequest, _super);
    function RetrieveNearEarthObjectFeedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveNearEarthObjectFeedQueryParams)
    ], RetrieveNearEarthObjectFeedRequest.prototype, "queryParams", void 0);
    return RetrieveNearEarthObjectFeedRequest;
}(SpeakeasyBase));
export { RetrieveNearEarthObjectFeedRequest };
var RetrieveNearEarthObjectFeedResponse = /** @class */ (function (_super) {
    __extends(RetrieveNearEarthObjectFeedResponse, _super);
    function RetrieveNearEarthObjectFeedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveNearEarthObjectFeedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.NearEarthObjectList)
    ], RetrieveNearEarthObjectFeedResponse.prototype, "nearEarthObjectList", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveNearEarthObjectFeedResponse.prototype, "statusCode", void 0);
    return RetrieveNearEarthObjectFeedResponse;
}(SpeakeasyBase));
export { RetrieveNearEarthObjectFeedResponse };
