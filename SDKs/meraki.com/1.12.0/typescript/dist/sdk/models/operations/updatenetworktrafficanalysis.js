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
var UpdateNetworkTrafficAnalysisPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisPathParams, _super);
    function UpdateNetworkTrafficAnalysisPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisPathParams.prototype, "networkId", void 0);
    return UpdateNetworkTrafficAnalysisPathParams;
}(SpeakeasyBase));
export { UpdateNetworkTrafficAnalysisPathParams };
export var UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum;
(function (UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum) {
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["Host"] = "host";
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["Port"] = "port";
    UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum["IpRange"] = "ipRange";
})(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum || (UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItemsTypeEnum = {}));
var UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems, _super);
    function UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems.prototype, "value", void 0);
    return UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems;
}(SpeakeasyBase));
export { UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems };
export var UpdateNetworkTrafficAnalysisRequestBodyModeEnum;
(function (UpdateNetworkTrafficAnalysisRequestBodyModeEnum) {
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Disabled"] = "disabled";
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Basic"] = "basic";
    UpdateNetworkTrafficAnalysisRequestBodyModeEnum["Detailed"] = "detailed";
})(UpdateNetworkTrafficAnalysisRequestBodyModeEnum || (UpdateNetworkTrafficAnalysisRequestBodyModeEnum = {}));
var UpdateNetworkTrafficAnalysisRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequestBody, _super);
    function UpdateNetworkTrafficAnalysisRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customPieChartItems", elemType: UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems }),
        __metadata("design:type", Array)
    ], UpdateNetworkTrafficAnalysisRequestBody.prototype, "customPieChartItems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mode" }),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisRequestBody.prototype, "mode", void 0);
    return UpdateNetworkTrafficAnalysisRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkTrafficAnalysisRequestBody };
var UpdateNetworkTrafficAnalysisRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisRequest, _super);
    function UpdateNetworkTrafficAnalysisRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkTrafficAnalysisPathParams)
    ], UpdateNetworkTrafficAnalysisRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkTrafficAnalysisRequestBody)
    ], UpdateNetworkTrafficAnalysisRequest.prototype, "request", void 0);
    return UpdateNetworkTrafficAnalysisRequest;
}(SpeakeasyBase));
export { UpdateNetworkTrafficAnalysisRequest };
var UpdateNetworkTrafficAnalysisResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkTrafficAnalysisResponse, _super);
    function UpdateNetworkTrafficAnalysisResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkTrafficAnalysisResponse.prototype, "updateNetworkTrafficAnalysis200ApplicationJsonObject", void 0);
    return UpdateNetworkTrafficAnalysisResponse;
}(SpeakeasyBase));
export { UpdateNetworkTrafficAnalysisResponse };
