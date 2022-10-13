package shared

type PlaybackErrorCodeEnum string

const (
	PlaybackErrorCodeEnumNotAllowed         PlaybackErrorCodeEnum = "NotAllowed"
	PlaybackErrorCodeEnumNoCompatibleStream PlaybackErrorCodeEnum = "NoCompatibleStream"
	PlaybackErrorCodeEnumRateLimitExceeded  PlaybackErrorCodeEnum = "RateLimitExceeded"
)
