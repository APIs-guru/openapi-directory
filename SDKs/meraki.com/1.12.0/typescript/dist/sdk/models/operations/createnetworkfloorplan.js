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
var CreateNetworkFloorPlanPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanPathParams, _super);
    function CreateNetworkFloorPlanPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkFloorPlanPathParams.prototype, "networkId", void 0);
    return CreateNetworkFloorPlanPathParams;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanPathParams };
// CreateNetworkFloorPlanRequestBodyBottomLeftCorner
/**
 * The longitude and latitude of the bottom left corner of your floor plan.
**/
var CreateNetworkFloorPlanRequestBodyBottomLeftCorner = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBodyBottomLeftCorner, _super);
    function CreateNetworkFloorPlanRequestBodyBottomLeftCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyBottomLeftCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyBottomLeftCorner.prototype, "lng", void 0);
    return CreateNetworkFloorPlanRequestBodyBottomLeftCorner;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBodyBottomLeftCorner };
// CreateNetworkFloorPlanRequestBodyBottomRightCorner
/**
 * The longitude and latitude of the bottom right corner of your floor plan.
**/
var CreateNetworkFloorPlanRequestBodyBottomRightCorner = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBodyBottomRightCorner, _super);
    function CreateNetworkFloorPlanRequestBodyBottomRightCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyBottomRightCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyBottomRightCorner.prototype, "lng", void 0);
    return CreateNetworkFloorPlanRequestBodyBottomRightCorner;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBodyBottomRightCorner };
// CreateNetworkFloorPlanRequestBodyCenter
/**
 * The longitude and latitude of the center of your floor plan. The 'center' or two adjacent corners (e.g. 'topLeftCorner' and 'bottomLeftCorner') must be specified. If 'center' is specified, the floor plan is placed over that point with no rotation. If two adjacent corners are specified, the floor plan is rotated to line up with the two specified points. The aspect ratio of the floor plan's image is preserved regardless of which corners/center are specified. (This means if that more than two corners are specified, only two corners may be used to preserve the floor plan's aspect ratio.). No two points can have the same latitude, longitude pair.
**/
var CreateNetworkFloorPlanRequestBodyCenter = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBodyCenter, _super);
    function CreateNetworkFloorPlanRequestBodyCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyCenter.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyCenter.prototype, "lng", void 0);
    return CreateNetworkFloorPlanRequestBodyCenter;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBodyCenter };
// CreateNetworkFloorPlanRequestBodyTopLeftCorner
/**
 * The longitude and latitude of the top left corner of your floor plan.
**/
var CreateNetworkFloorPlanRequestBodyTopLeftCorner = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBodyTopLeftCorner, _super);
    function CreateNetworkFloorPlanRequestBodyTopLeftCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyTopLeftCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyTopLeftCorner.prototype, "lng", void 0);
    return CreateNetworkFloorPlanRequestBodyTopLeftCorner;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBodyTopLeftCorner };
// CreateNetworkFloorPlanRequestBodyTopRightCorner
/**
 * The longitude and latitude of the top right corner of your floor plan.
**/
var CreateNetworkFloorPlanRequestBodyTopRightCorner = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBodyTopRightCorner, _super);
    function CreateNetworkFloorPlanRequestBodyTopRightCorner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyTopRightCorner.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanRequestBodyTopRightCorner.prototype, "lng", void 0);
    return CreateNetworkFloorPlanRequestBodyTopRightCorner;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBodyTopRightCorner };
var CreateNetworkFloorPlanRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequestBody, _super);
    function CreateNetworkFloorPlanRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomLeftCorner" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBodyBottomLeftCorner)
    ], CreateNetworkFloorPlanRequestBody.prototype, "bottomLeftCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bottomRightCorner" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBodyBottomRightCorner)
    ], CreateNetworkFloorPlanRequestBody.prototype, "bottomRightCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=center" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBodyCenter)
    ], CreateNetworkFloorPlanRequestBody.prototype, "center", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageContents" }),
        __metadata("design:type", String)
    ], CreateNetworkFloorPlanRequestBody.prototype, "imageContents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkFloorPlanRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topLeftCorner" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBodyTopLeftCorner)
    ], CreateNetworkFloorPlanRequestBody.prototype, "topLeftCorner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topRightCorner" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBodyTopRightCorner)
    ], CreateNetworkFloorPlanRequestBody.prototype, "topRightCorner", void 0);
    return CreateNetworkFloorPlanRequestBody;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequestBody };
var CreateNetworkFloorPlanRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanRequest, _super);
    function CreateNetworkFloorPlanRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkFloorPlanPathParams)
    ], CreateNetworkFloorPlanRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkFloorPlanRequestBody)
    ], CreateNetworkFloorPlanRequest.prototype, "request", void 0);
    return CreateNetworkFloorPlanRequest;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanRequest };
var CreateNetworkFloorPlanResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkFloorPlanResponse, _super);
    function CreateNetworkFloorPlanResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkFloorPlanResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkFloorPlanResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkFloorPlanResponse.prototype, "createNetworkFloorPlan201ApplicationJsonObject", void 0);
    return CreateNetworkFloorPlanResponse;
}(SpeakeasyBase));
export { CreateNetworkFloorPlanResponse };
