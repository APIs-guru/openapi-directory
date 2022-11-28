import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
export declare enum ImageButtonIconEnum {
    IconUnspecified = "ICON_UNSPECIFIED",
    Airplane = "AIRPLANE",
    Bookmark = "BOOKMARK",
    Bus = "BUS",
    Car = "CAR",
    Clock = "CLOCK",
    ConfirmationNumberIcon = "CONFIRMATION_NUMBER_ICON",
    Dollar = "DOLLAR",
    Description = "DESCRIPTION",
    Email = "EMAIL",
    EventPerformer = "EVENT_PERFORMER",
    EventSeat = "EVENT_SEAT",
    FlightArrival = "FLIGHT_ARRIVAL",
    FlightDeparture = "FLIGHT_DEPARTURE",
    Hotel = "HOTEL",
    HotelRoomType = "HOTEL_ROOM_TYPE",
    Invite = "INVITE",
    MapPin = "MAP_PIN",
    Membership = "MEMBERSHIP",
    MultiplePeople = "MULTIPLE_PEOPLE",
    Offer = "OFFER",
    Person = "PERSON",
    Phone = "PHONE",
    RestaurantIcon = "RESTAURANT_ICON",
    ShoppingCart = "SHOPPING_CART",
    Star = "STAR",
    Store = "STORE",
    Ticket = "TICKET",
    Train = "TRAIN",
    VideoCamera = "VIDEO_CAMERA",
    VideoPlay = "VIDEO_PLAY"
}
/**
 * An image button with an onclick action.
**/
export declare class ImageButton extends SpeakeasyBase {
    icon?: ImageButtonIconEnum;
    iconUrl?: string;
    name?: string;
    onClick?: OnClick;
}
