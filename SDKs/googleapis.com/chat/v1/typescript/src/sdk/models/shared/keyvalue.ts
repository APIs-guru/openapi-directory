import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
import { OnClick } from "./onclick";


export enum KeyValueIconEnum {
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


// KeyValue
/** 
 * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
**/
export class KeyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bottomLabel" })
  bottomLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=button" })
  button?: Button;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=contentMultiline" })
  contentMultiline?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: KeyValueIconEnum;

  @SpeakeasyMetadata({ data: "json, name=iconUrl" })
  iconUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=onClick" })
  onClick?: OnClick;

  @SpeakeasyMetadata({ data: "json, name=topLabel" })
  topLabel?: string;
}
