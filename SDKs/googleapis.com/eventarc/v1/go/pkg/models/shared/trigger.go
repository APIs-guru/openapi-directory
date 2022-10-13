package shared

type Trigger struct {
	Channel        *string                   `json:"channel"`
	Conditions     map[string]StateCondition `json:"conditions"`
	CreateTime     *string                   `json:"createTime"`
	Destination    *Destination              `json:"destination"`
	Etag           *string                   `json:"etag"`
	EventFilters   []EventFilter             `json:"eventFilters"`
	Labels         map[string]string         `json:"labels"`
	Name           *string                   `json:"name"`
	ServiceAccount *string                   `json:"serviceAccount"`
	Transport      *Transport                `json:"transport"`
	UID            *string                   `json:"uid"`
	UpdateTime     *string                   `json:"updateTime"`
}
