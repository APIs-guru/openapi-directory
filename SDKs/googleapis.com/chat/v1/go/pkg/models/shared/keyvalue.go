package shared

type KeyValueIconEnum string

const (
	KeyValueIconEnumIconUnspecified        KeyValueIconEnum = "ICON_UNSPECIFIED"
	KeyValueIconEnumAirplane               KeyValueIconEnum = "AIRPLANE"
	KeyValueIconEnumBookmark               KeyValueIconEnum = "BOOKMARK"
	KeyValueIconEnumBus                    KeyValueIconEnum = "BUS"
	KeyValueIconEnumCar                    KeyValueIconEnum = "CAR"
	KeyValueIconEnumClock                  KeyValueIconEnum = "CLOCK"
	KeyValueIconEnumConfirmationNumberIcon KeyValueIconEnum = "CONFIRMATION_NUMBER_ICON"
	KeyValueIconEnumDollar                 KeyValueIconEnum = "DOLLAR"
	KeyValueIconEnumDescription            KeyValueIconEnum = "DESCRIPTION"
	KeyValueIconEnumEmail                  KeyValueIconEnum = "EMAIL"
	KeyValueIconEnumEventPerformer         KeyValueIconEnum = "EVENT_PERFORMER"
	KeyValueIconEnumEventSeat              KeyValueIconEnum = "EVENT_SEAT"
	KeyValueIconEnumFlightArrival          KeyValueIconEnum = "FLIGHT_ARRIVAL"
	KeyValueIconEnumFlightDeparture        KeyValueIconEnum = "FLIGHT_DEPARTURE"
	KeyValueIconEnumHotel                  KeyValueIconEnum = "HOTEL"
	KeyValueIconEnumHotelRoomType          KeyValueIconEnum = "HOTEL_ROOM_TYPE"
	KeyValueIconEnumInvite                 KeyValueIconEnum = "INVITE"
	KeyValueIconEnumMapPin                 KeyValueIconEnum = "MAP_PIN"
	KeyValueIconEnumMembership             KeyValueIconEnum = "MEMBERSHIP"
	KeyValueIconEnumMultiplePeople         KeyValueIconEnum = "MULTIPLE_PEOPLE"
	KeyValueIconEnumOffer                  KeyValueIconEnum = "OFFER"
	KeyValueIconEnumPerson                 KeyValueIconEnum = "PERSON"
	KeyValueIconEnumPhone                  KeyValueIconEnum = "PHONE"
	KeyValueIconEnumRestaurantIcon         KeyValueIconEnum = "RESTAURANT_ICON"
	KeyValueIconEnumShoppingCart           KeyValueIconEnum = "SHOPPING_CART"
	KeyValueIconEnumStar                   KeyValueIconEnum = "STAR"
	KeyValueIconEnumStore                  KeyValueIconEnum = "STORE"
	KeyValueIconEnumTicket                 KeyValueIconEnum = "TICKET"
	KeyValueIconEnumTrain                  KeyValueIconEnum = "TRAIN"
	KeyValueIconEnumVideoCamera            KeyValueIconEnum = "VIDEO_CAMERA"
	KeyValueIconEnumVideoPlay              KeyValueIconEnum = "VIDEO_PLAY"
)

type KeyValue struct {
	BottomLabel      *string           `json:"bottomLabel"`
	Button           *Button           `json:"button"`
	Content          *string           `json:"content"`
	ContentMultiline *bool             `json:"contentMultiline"`
	Icon             *KeyValueIconEnum `json:"icon"`
	IconURL          *string           `json:"iconUrl"`
	OnClick          *OnClick          `json:"onClick"`
	TopLabel         *string           `json:"topLabel"`
}
