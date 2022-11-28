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
import { GoogleCloudRecommendationengineV1beta1EventDetail } from "./googlecloudrecommendationenginev1beta1eventdetail";
import { GoogleCloudRecommendationengineV1beta1ProductEventDetail } from "./googlecloudrecommendationenginev1beta1producteventdetail";
import { GoogleCloudRecommendationengineV1beta1UserInfo } from "./googlecloudrecommendationenginev1beta1userinfo";
export var GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum;
(function (GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum) {
    GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum["EventSourceUnspecified"] = "EVENT_SOURCE_UNSPECIFIED";
    GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum["Automl"] = "AUTOML";
    GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum["Ecommerce"] = "ECOMMERCE";
    GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum["BatchUpload"] = "BATCH_UPLOAD";
})(GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum || (GoogleCloudRecommendationengineV1beta1UserEventEventSourceEnum = {}));
// GoogleCloudRecommendationengineV1beta1UserEvent
/**
 * UserEvent captures all metadata information recommendation engine needs to know about how end users interact with customers' website.
**/
var GoogleCloudRecommendationengineV1beta1UserEvent = /** @class */ (function (_super) {
    __extends(GoogleCloudRecommendationengineV1beta1UserEvent, _super);
    function GoogleCloudRecommendationengineV1beta1UserEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventDetail" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1EventDetail)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "eventDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventSource" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "eventSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventType" }),
        __metadata("design:type", String)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productEventDetail" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1ProductEventDetail)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "productEventDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", GoogleCloudRecommendationengineV1beta1UserInfo)
    ], GoogleCloudRecommendationengineV1beta1UserEvent.prototype, "userInfo", void 0);
    return GoogleCloudRecommendationengineV1beta1UserEvent;
}(SpeakeasyBase));
export { GoogleCloudRecommendationengineV1beta1UserEvent };
