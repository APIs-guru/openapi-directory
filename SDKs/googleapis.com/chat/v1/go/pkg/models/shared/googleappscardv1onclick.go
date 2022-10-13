package shared

type GoogleAppsCardV1OnClick struct {
	Action                *GoogleAppsCardV1Action   `json:"action"`
	Card                  *GoogleAppsCardV1Card     `json:"card"`
	OpenDynamicLinkAction *GoogleAppsCardV1Action   `json:"openDynamicLinkAction"`
	OpenLink              *GoogleAppsCardV1OpenLink `json:"openLink"`
}
