package shared

type LocationsOrderEnum string

const (
	LocationsOrderEnumCity         LocationsOrderEnum = "city"
	LocationsOrderEnumCountry      LocationsOrderEnum = "country"
	LocationsOrderEnumLocation     LocationsOrderEnum = "location"
	LocationsOrderEnumSourceName   LocationsOrderEnum = "sourceName"
	LocationsOrderEnumFirstUpdated LocationsOrderEnum = "firstUpdated"
	LocationsOrderEnumLastUpdated  LocationsOrderEnum = "lastUpdated"
	LocationsOrderEnumCount        LocationsOrderEnum = "count"
	LocationsOrderEnumRandom       LocationsOrderEnum = "random"
)
