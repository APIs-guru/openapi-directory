package shared

type Drive struct {
	Name  *string    `json:"name"`
	Root  *DriveItem `json:"root"`
	Title *string    `json:"title"`
}
