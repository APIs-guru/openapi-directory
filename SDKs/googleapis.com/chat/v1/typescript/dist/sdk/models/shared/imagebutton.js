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
import { OnClick } from "./onclick";
export var ImageButtonIconEnum;
(function (ImageButtonIconEnum) {
    ImageButtonIconEnum["IconUnspecified"] = "ICON_UNSPECIFIED";
    ImageButtonIconEnum["Airplane"] = "AIRPLANE";
    ImageButtonIconEnum["Bookmark"] = "BOOKMARK";
    ImageButtonIconEnum["Bus"] = "BUS";
    ImageButtonIconEnum["Car"] = "CAR";
    ImageButtonIconEnum["Clock"] = "CLOCK";
    ImageButtonIconEnum["ConfirmationNumberIcon"] = "CONFIRMATION_NUMBER_ICON";
    ImageButtonIconEnum["Dollar"] = "DOLLAR";
    ImageButtonIconEnum["Description"] = "DESCRIPTION";
    ImageButtonIconEnum["Email"] = "EMAIL";
    ImageButtonIconEnum["EventPerformer"] = "EVENT_PERFORMER";
    ImageButtonIconEnum["EventSeat"] = "EVENT_SEAT";
    ImageButtonIconEnum["FlightArrival"] = "FLIGHT_ARRIVAL";
    ImageButtonIconEnum["FlightDeparture"] = "FLIGHT_DEPARTURE";
    ImageButtonIconEnum["Hotel"] = "HOTEL";
    ImageButtonIconEnum["HotelRoomType"] = "HOTEL_ROOM_TYPE";
    ImageButtonIconEnum["Invite"] = "INVITE";
    ImageButtonIconEnum["MapPin"] = "MAP_PIN";
    ImageButtonIconEnum["Membership"] = "MEMBERSHIP";
    ImageButtonIconEnum["MultiplePeople"] = "MULTIPLE_PEOPLE";
    ImageButtonIconEnum["Offer"] = "OFFER";
    ImageButtonIconEnum["Person"] = "PERSON";
    ImageButtonIconEnum["Phone"] = "PHONE";
    ImageButtonIconEnum["RestaurantIcon"] = "RESTAURANT_ICON";
    ImageButtonIconEnum["ShoppingCart"] = "SHOPPING_CART";
    ImageButtonIconEnum["Star"] = "STAR";
    ImageButtonIconEnum["Store"] = "STORE";
    ImageButtonIconEnum["Ticket"] = "TICKET";
    ImageButtonIconEnum["Train"] = "TRAIN";
    ImageButtonIconEnum["VideoCamera"] = "VIDEO_CAMERA";
    ImageButtonIconEnum["VideoPlay"] = "VIDEO_PLAY";
})(ImageButtonIconEnum || (ImageButtonIconEnum = {}));
// ImageButton
/**
 * An image button with an onclick action.
**/
var ImageButton = /** @class */ (function (_super) {
    __extends(ImageButton, _super);
    function ImageButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon" }),
        __metadata("design:type", String)
    ], ImageButton.prototype, "icon", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iconUrl" }),
        __metadata("design:type", String)
    ], ImageButton.prototype, "iconUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ImageButton.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onClick" }),
        __metadata("design:type", OnClick)
    ], ImageButton.prototype, "onClick", void 0);
    return ImageButton;
}(SpeakeasyBase));
export { ImageButton };
