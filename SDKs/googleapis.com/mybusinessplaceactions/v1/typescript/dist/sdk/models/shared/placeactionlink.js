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
export var PlaceActionLinkPlaceActionTypeEnum;
(function (PlaceActionLinkPlaceActionTypeEnum) {
    PlaceActionLinkPlaceActionTypeEnum["PlaceActionTypeUnspecified"] = "PLACE_ACTION_TYPE_UNSPECIFIED";
    PlaceActionLinkPlaceActionTypeEnum["Appointment"] = "APPOINTMENT";
    PlaceActionLinkPlaceActionTypeEnum["OnlineAppointment"] = "ONLINE_APPOINTMENT";
    PlaceActionLinkPlaceActionTypeEnum["DiningReservation"] = "DINING_RESERVATION";
    PlaceActionLinkPlaceActionTypeEnum["FoodOrdering"] = "FOOD_ORDERING";
    PlaceActionLinkPlaceActionTypeEnum["FoodDelivery"] = "FOOD_DELIVERY";
    PlaceActionLinkPlaceActionTypeEnum["FoodTakeout"] = "FOOD_TAKEOUT";
    PlaceActionLinkPlaceActionTypeEnum["ShopOnline"] = "SHOP_ONLINE";
})(PlaceActionLinkPlaceActionTypeEnum || (PlaceActionLinkPlaceActionTypeEnum = {}));
export var PlaceActionLinkProviderTypeEnum;
(function (PlaceActionLinkProviderTypeEnum) {
    PlaceActionLinkProviderTypeEnum["ProviderTypeUnspecified"] = "PROVIDER_TYPE_UNSPECIFIED";
    PlaceActionLinkProviderTypeEnum["Merchant"] = "MERCHANT";
    PlaceActionLinkProviderTypeEnum["Aggregator3P"] = "AGGREGATOR_3P";
})(PlaceActionLinkProviderTypeEnum || (PlaceActionLinkProviderTypeEnum = {}));
// PlaceActionLinkInput
/**
 * Represents a place action link and its attributes.
**/
var PlaceActionLinkInput = /** @class */ (function (_super) {
    __extends(PlaceActionLinkInput, _super);
    function PlaceActionLinkInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPreferred" }),
        __metadata("design:type", Boolean)
    ], PlaceActionLinkInput.prototype, "isPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlaceActionLinkInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeActionType" }),
        __metadata("design:type", String)
    ], PlaceActionLinkInput.prototype, "placeActionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PlaceActionLinkInput.prototype, "uri", void 0);
    return PlaceActionLinkInput;
}(SpeakeasyBase));
export { PlaceActionLinkInput };
// PlaceActionLink
/**
 * Represents a place action link and its attributes.
**/
var PlaceActionLink = /** @class */ (function (_super) {
    __extends(PlaceActionLink, _super);
    function PlaceActionLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEditable" }),
        __metadata("design:type", Boolean)
    ], PlaceActionLink.prototype, "isEditable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPreferred" }),
        __metadata("design:type", Boolean)
    ], PlaceActionLink.prototype, "isPreferred", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placeActionType" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "placeActionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=providerType" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "providerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], PlaceActionLink.prototype, "uri", void 0);
    return PlaceActionLink;
}(SpeakeasyBase));
export { PlaceActionLink };
