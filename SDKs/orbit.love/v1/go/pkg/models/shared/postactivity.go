package shared




type PostActivityActivityTypeEnum string

const (
    PostActivityActivityTypeEnumContent PostActivityActivityTypeEnum = "content"
)


type PostActivity struct {
    ActivityType PostActivityActivityTypeEnum `json:"activity_type"`
    OccurredAt *string `json:"occurred_at,omitempty"`
    URL string `json:"url"`
    
}

