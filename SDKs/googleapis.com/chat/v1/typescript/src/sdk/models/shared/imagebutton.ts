import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";


export enum ImageButtonIconEnum {
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


// ImageButton
/** 
 * An image button with an onclick action.
**/
export class ImageButton extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: ImageButtonIconEnum;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: OnClick;
}
