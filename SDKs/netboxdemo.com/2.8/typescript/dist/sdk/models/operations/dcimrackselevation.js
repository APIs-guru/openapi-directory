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
var DcimRacksElevationPathParams = /** @class */ (function (_super) {
    __extends(DcimRacksElevationPathParams, _super);
    function DcimRacksElevationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DcimRacksElevationPathParams.prototype, "id", void 0);
    return DcimRacksElevationPathParams;
}(SpeakeasyBase));
export { DcimRacksElevationPathParams };
export var DcimRacksElevationFaceEnum;
(function (DcimRacksElevationFaceEnum) {
    DcimRacksElevationFaceEnum["Front"] = "front";
    DcimRacksElevationFaceEnum["Rear"] = "rear";
})(DcimRacksElevationFaceEnum || (DcimRacksElevationFaceEnum = {}));
export var DcimRacksElevationRenderEnum;
(function (DcimRacksElevationRenderEnum) {
    DcimRacksElevationRenderEnum["Json"] = "json";
    DcimRacksElevationRenderEnum["Svg"] = "svg";
})(DcimRacksElevationRenderEnum || (DcimRacksElevationRenderEnum = {}));
var DcimRacksElevationQueryParams = /** @class */ (function (_super) {
    __extends(DcimRacksElevationQueryParams, _super);
    function DcimRacksElevationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude" }),
        __metadata("design:type", Number)
    ], DcimRacksElevationQueryParams.prototype, "exclude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand_devices" }),
        __metadata("design:type", Boolean)
    ], DcimRacksElevationQueryParams.prototype, "expandDevices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=face" }),
        __metadata("design:type", String)
    ], DcimRacksElevationQueryParams.prototype, "face", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_images" }),
        __metadata("design:type", Boolean)
    ], DcimRacksElevationQueryParams.prototype, "includeImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=legend_width" }),
        __metadata("design:type", Number)
    ], DcimRacksElevationQueryParams.prototype, "legendWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimRacksElevationQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=render" }),
        __metadata("design:type", String)
    ], DcimRacksElevationQueryParams.prototype, "render", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit_height" }),
        __metadata("design:type", Number)
    ], DcimRacksElevationQueryParams.prototype, "unitHeight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unit_width" }),
        __metadata("design:type", Number)
    ], DcimRacksElevationQueryParams.prototype, "unitWidth", void 0);
    return DcimRacksElevationQueryParams;
}(SpeakeasyBase));
export { DcimRacksElevationQueryParams };
var DcimRacksElevationRequest = /** @class */ (function (_super) {
    __extends(DcimRacksElevationRequest, _super);
    function DcimRacksElevationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimRacksElevationPathParams)
    ], DcimRacksElevationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimRacksElevationQueryParams)
    ], DcimRacksElevationRequest.prototype, "queryParams", void 0);
    return DcimRacksElevationRequest;
}(SpeakeasyBase));
export { DcimRacksElevationRequest };
var DcimRacksElevationResponse = /** @class */ (function (_super) {
    __extends(DcimRacksElevationResponse, _super);
    function DcimRacksElevationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimRacksElevationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.RackUnit }),
        __metadata("design:type", Array)
    ], DcimRacksElevationResponse.prototype, "rackUnits", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimRacksElevationResponse.prototype, "statusCode", void 0);
    return DcimRacksElevationResponse;
}(SpeakeasyBase));
export { DcimRacksElevationResponse };
