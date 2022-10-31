package shared

type GoogleAppsCardV1OnClick struct {
	Action                *GoogleAppsCardV1Action   `json:"action,omitempty"`
	Card                  *GoogleAppsCardV1Card     `json:"card,omitempty"`
	OpenDynamicLinkAction *GoogleAppsCardV1Action   `json:"openDynamicLinkAction,omitempty"`
	OpenLink              *GoogleAppsCardV1OpenLink `json:"openLink,omitempty"`
}
