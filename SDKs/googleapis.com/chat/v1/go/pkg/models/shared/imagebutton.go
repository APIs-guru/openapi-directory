package shared

type ImageButtonIconEnum string

const (
	ImageButtonIconEnumIconUnspecified        ImageButtonIconEnum = "ICON_UNSPECIFIED"
	ImageButtonIconEnumAirplane               ImageButtonIconEnum = "AIRPLANE"
	ImageButtonIconEnumBookmark               ImageButtonIconEnum = "BOOKMARK"
	ImageButtonIconEnumBus                    ImageButtonIconEnum = "BUS"
	ImageButtonIconEnumCar                    ImageButtonIconEnum = "CAR"
	ImageButtonIconEnumClock                  ImageButtonIconEnum = "CLOCK"
	ImageButtonIconEnumConfirmationNumberIcon ImageButtonIconEnum = "CONFIRMATION_NUMBER_ICON"
	ImageButtonIconEnumDollar                 ImageButtonIconEnum = "DOLLAR"
	ImageButtonIconEnumDescription            ImageButtonIconEnum = "DESCRIPTION"
	ImageButtonIconEnumEmail                  ImageButtonIconEnum = "EMAIL"
	ImageButtonIconEnumEventPerformer         ImageButtonIconEnum = "EVENT_PERFORMER"
	ImageButtonIconEnumEventSeat              ImageButtonIconEnum = "EVENT_SEAT"
	ImageButtonIconEnumFlightArrival          ImageButtonIconEnum = "FLIGHT_ARRIVAL"
	ImageButtonIconEnumFlightDeparture        ImageButtonIconEnum = "FLIGHT_DEPARTURE"
	ImageButtonIconEnumHotel                  ImageButtonIconEnum = "HOTEL"
	ImageButtonIconEnumHotelRoomType          ImageButtonIconEnum = "HOTEL_ROOM_TYPE"
	ImageButtonIconEnumInvite                 ImageButtonIconEnum = "INVITE"
	ImageButtonIconEnumMapPin                 ImageButtonIconEnum = "MAP_PIN"
	ImageButtonIconEnumMembership             ImageButtonIconEnum = "MEMBERSHIP"
	ImageButtonIconEnumMultiplePeople         ImageButtonIconEnum = "MULTIPLE_PEOPLE"
	ImageButtonIconEnumOffer                  ImageButtonIconEnum = "OFFER"
	ImageButtonIconEnumPerson                 ImageButtonIconEnum = "PERSON"
	ImageButtonIconEnumPhone                  ImageButtonIconEnum = "PHONE"
	ImageButtonIconEnumRestaurantIcon         ImageButtonIconEnum = "RESTAURANT_ICON"
	ImageButtonIconEnumShoppingCart           ImageButtonIconEnum = "SHOPPING_CART"
	ImageButtonIconEnumStar                   ImageButtonIconEnum = "STAR"
	ImageButtonIconEnumStore                  ImageButtonIconEnum = "STORE"
	ImageButtonIconEnumTicket                 ImageButtonIconEnum = "TICKET"
	ImageButtonIconEnumTrain                  ImageButtonIconEnum = "TRAIN"
	ImageButtonIconEnumVideoCamera            ImageButtonIconEnum = "VIDEO_CAMERA"
	ImageButtonIconEnumVideoPlay              ImageButtonIconEnum = "VIDEO_PLAY"
)

type ImageButton struct {
	Icon    *ImageButtonIconEnum `json:"icon,omitempty"`
	IconURL *string              `json:"iconUrl,omitempty"`
	Name    *string              `json:"name,omitempty"`
	OnClick *OnClick             `json:"onClick,omitempty"`
}
