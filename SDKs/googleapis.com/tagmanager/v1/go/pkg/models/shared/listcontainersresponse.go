package shared

type ListContainersResponse struct {
	Containers []Container `json:"containers"`
}
